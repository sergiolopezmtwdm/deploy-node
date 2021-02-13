import express, {Request, Response, NextFunction} from 'express';
import cors from 'cors';

const app = express();

app.get('/', (req:Request, res: Response) =>{
    res.status(200).json({
        ok:true,
        msg: 'API NodeJS Funcionando correctamente'
    })
});

app.listen(3000, () => {
    console.log('Servidor Express corriendo en el puerto 3000');
});