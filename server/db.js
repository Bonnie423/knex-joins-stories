import connection from './connection.js'

export function getWombles() {
  return connection('wombles').select()
}

export function getWomblesById(id) {
  return connection('wombles')
    .join('traits', 'traits.id', 'trait_id')
    .where(`wombles.id`, id)
    .select('name', 'description')
    .first()
}
export function listOfAssigments() {
  return connection('wombles')
    .join('rubbish', 'rubbish.id', 'wombles.rubbish_id')

    .select('wombles.name', 'rubbish.name as rubbish')
}
