import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comment from 'App/Models/Coment'
import Moment from 'App/Models/Moment'

export default class ComentsController {
  public async store({ request, params, response }: HttpContextContract) {
    const body = request.body()

    const momentId = params.momentId

    await Moment.findOrFail(momentId)

    body.momentId = momentId

    const comment = await Comment.create(body)

    response.status(201)

    return {
      message: 'Comentário adicionado',
      data: comment,
    }
  }
}
