import express from 'express'
import { convert } from '../controller/convert.js'
const router= express.Router()
router.route('/').post(convert)
export default router