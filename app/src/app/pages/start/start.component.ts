import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


import { ServService } from '../../serv.service';
import * as NikosEditor from '../../../../../ckeditor5/build/ckeditor.js';

@Component({
  selector: 'niko-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})

export class StartComponent implements OnInit {
  options: string[];
  filteredOptions: string[];
  selectedItem: string; 
  selectedId:string;
  response: Array<{ title: string, id: string }> = [];
  formGroup: FormGroup;

  html_test_data = "<h1>Test data</h1>";

  Editor = NikosEditor;
  isEditing = false;

  
  constructor(
    private service: ServService, 
    private fb: FormBuilder, 
    private route: ActivatedRoute,
    private router: Router


  ) { }

  inputChange(event: any){
    const userinput = event.target.value;
    console.log(userinput);
  }

  ngOnInit(): void{
    this.route.queryParams.subscribe(params => {
      this.selectedId = params[''];
    });
    this.initForm();
    this.getGesetze();
  }

  ngOnDestroy() {
    this.router.navigate(['/start']);
}

  initForm(){this.formGroup = this.fb.group({
    'gesetze' : ['']
  });
  this.formGroup.get('gesetze')?.valueChanges.subscribe(response => {
    console.log('Ausgewähltes Gesetz:', response);
    this.filterData(response);
  });
}
resetFilter(event: any){
  if(!event.target.value){
    this.filteredOptions = this.options;
  }
}
getGesetze(){
  this.service.getData().subscribe(response => {
    if(Array.isArray(response)){
      this.options = response.map(r => r.title);
      this.filteredOptions = this.options;
      console.log(response);
      this.response = response;
    }
    
  });
}

updateItem(updatedItem) {
  this.response = this.response.map(item => {
    if (item.id === updatedItem.id) {
      return Object.assign({}, item, updatedItem);
    }
    return item;
  });
}

filterData(userInput) {
  this.filteredOptions = this.options.filter(item => {
    return item.toLocaleLowerCase().indexOf(userInput.toLocaleLowerCase()) > -1
  });
  this.selectedItem = userInput;
  
  // find the selected item in the response array
  const selectedItem = this.response.find(item => item.title === userInput);
  if (selectedItem) {
    const id = selectedItem.id;
    this.router.navigate(['start/document', id]);
    console.log("id: ", id)
  }

}
editorChange(event: any) {
  const data = event.editor.getData();
  console.log({ data });
  this.html_test_data = data;
  
}
toggleEditor() {
  this.isEditing = !this.isEditing;

}


}