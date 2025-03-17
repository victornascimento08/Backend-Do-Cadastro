import { Router } from 'express';
import ClienteCtrl from '../routeCliente/clienteCrtl.js'; 

const routeCliente = new Router();
const cliCtrl = new ClienteCtrl();

routeCliente
  .get('/', cliCtrl.consultar)           
  .get('/:termo', cliCtrl.consultar)     
  .post('/', cliCtrl.gravar)             
  .put('/:codigo', cliCtrl.atualizar)    
  .patch('/:codigo', cliCtrl.atualizar) 
  .delete('/:codigo', cliCtrl.excluir);  

export default routeCliente;