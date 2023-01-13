import { Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common';
import { CreateGesetzDto } from './dto/create-gesetz.dto';
import { GesetzeService } from './gesetze.service';
import { Gesetz } from './interfaces/gesetz.interface';

@Controller('gesetze')
export class GesetzeController {
    constructor(private readonly gesetzeService: GesetzeService){ }

    @Get()
    findAll(): Gesetz[]{
        return this.gesetzeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Gesetz{
        return this.gesetzeService.findOne(id);
    }

    @Post()
    create(@Body() createGesetzDto: CreateGesetzDto): string{
            return `Gesetz ${createGesetzDto.title} mit id: ${createGesetzDto.id} gespeichert.`
    }

    @Delete(':id')
    delete(@Param('id') id) {
        return `Delete ${id}`;
    }


    @Put(':id')
    update(@Body() updateItemDto: CreateGesetzDto, @Param('id') id) {
        return `Gesetz ${id} aktualisiert zu :  ${updateItemDto.title}.}  . `;
    }
}