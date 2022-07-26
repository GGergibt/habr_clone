import {createDB} from '../db/utils.js';

import './envExport.js';

const teardown = async () => {
  console.log("Tests passed")
  console.log(process.env.DB_NAME)
  const connection = await createDB()
  connection.execute(`DROP DATABASE ${process.env.DB_NAME}`)
}
export default teardown
