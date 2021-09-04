import {Router} from 'express'

import * as HomeController from '../controller/HomeController'
import * as InfoController from '../controller/infoController'
import * as UserController from '../controller/UserController';

const router = Router();

router.get('/',HomeController.home);

router.get('/contato',InfoController.contato);
router.get('/sobre',InfoController.sobre);

router.get('/nome',UserController.nome);
router.get('/idade',UserController.idadeForm);
router.post('/idade-resultado',UserController.idadeAction);



export default router;