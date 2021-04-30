import { afterAll, beforeAll, it } from "@jest/globals";

import app  from "../../../../app"
import db from "../../../../models"

import supertest from "supertest"

import  ProfessionService from "../../Profession/ProfessionService"

describe("test the profession crud", () => {
  // Set the db object to a variable which can be accessed throughout the whole test file
  let thisDb = db

  // Before any tests run, clear the DB and run migrations with Sequelize sync()
  beforeAll(async () => {
    await thisDb.sequelize.sync({ force: true })
  })

  it("(service) should succeed in create a profession", async () => {
    const profession = await ProfessionService.create({ description: "Software Developer" })

    expect(profession).toMatchObject({ description: "Software Developer" })
  })

  it("(service) should succeed in update a profession", async () => {
    const profession = await ProfessionService.update({ description: "React Software Developer" }, 1)

    expect(profession).toMatchObject({ id: 1,  description: "React Software Developer" })
  })

  it("(routes) should receive a list of professions", async () => {
    const response = await supertest(app).get("/api/v1/profession").expect(200)

    expect(response.body).toMatchObject({ items: [{ description: "React Software Developer" }] })
  })

  it("(routes) should receive one profession", async () => {
    const response = await supertest(app).get("/api/v1/profession/1").expect(200)

    expect(response.body).toMatchObject({ description: "React Software Developer" } )
  })

  it("(routes) should succeed in update a profession", async () => {
    const response = await supertest(app).put("/api/v1/profession/1").send({
      description: "Angular Software Developer"
    }).expect(200)

    expect(response.body).toMatchObject({ description: "Angular Software Developer" } )
  })

  // After all tests have finished, close the DB connection
  afterAll(async () => {
    await thisDb.sequelize.close()
  })
})
