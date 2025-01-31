import { Router } from 'express'
import {createUser, getUsers, getUser, filtrarUsuarios, updateUser, deleteUser, cambiarContraseña, verificarAdmin} from '../controllers/usuario.controllers.js'

const router = Router()

router.get('/usuarios', getUsers)
router.post('/usuarios', createUser)

router.delete('/usuarios/:id_user', deleteUser)

router.get('/usuarios/:id_user', getUser)
router.get("/filtro/:rol", filtrarUsuarios); // Filtrar usuarios
router.get("/:id/admin", verificarAdmin); // Para saber si es admin



router.put('/usuarios/:id_user', updateUser) //Actualizar usuario
router.put("/cambiar", cambiarContraseña); // Cambia la contraseña
export default router