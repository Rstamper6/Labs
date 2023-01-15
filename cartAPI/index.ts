import express, {Application, Request, Response} from 'express'
import { itemRouter } from './routes';

const app:Application = express()

const port = 3000;

//telling to return info in json format
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//if /items is used in the URL, it will go to itemRouter and run
app.use("/cart-items", itemRouter);

app.listen(port, ():void =>{
    console.log(`Listening on port ${port}`); 
});