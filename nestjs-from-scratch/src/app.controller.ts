import { Controller, Module, Get } from '@nestjs/common';

@Controller('/app')
export class AppController {
    @Get('/asdf')
    getRootRoute(){
        return 'Hi There!';
    }

    @Get('/bye')
    getByeThere(){
        return 'Bye There!';
    }
}

