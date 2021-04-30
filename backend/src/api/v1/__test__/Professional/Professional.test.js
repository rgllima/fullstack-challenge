import { afterAll, beforeAll, it } from "@jest/globals";

import app  from "../../../../app"
import db from "../../../../models"

import faker from "faker"

import supertest from "supertest"

import  ProfessionService from "../../Profession/ProfessionService"
import  ProfessionalService from "../../Professional/ProfessionalService"

describe("test the professional crud", () => {
  // Set the db object to a variable which can be accessed throughout the whole test file
  let thisDb = db

  // Before any tests run, clear the DB and run migrations with Sequelize sync()
  beforeAll(async () => {
    await thisDb.sequelize.sync({ force: true })
    await ProfessionService.create({ description: "Software Developer" })
  })

  it("(service) should succeed in create a professional", async () => {
    const name = faker.name.findName();
    const email = faker.internet.email();
    const phone = faker.phone.phoneNumber();

    const professional = await ProfessionalService.create({
      name,
      email,
      phone,
      professionId: 1,
      active: true,
    })

    expect(professional).toMatchObject({
      name,
      email,
      phone,
      professionId: 1,
      active: true,
    })
  })

  it("(service) should succeed in update a professional", async () => {
    const name = "José Silva";
    const email = "jose@silva.com";
    const phone = "88997524214";

    const professional = await ProfessionalService.update({
      name,
      email,
      phone,
      professionId: 1,
      active: false,
    } , 1)

    expect(professional).toMatchObject({
      id: 1,
      name,
      email,
      phone,
      professionId: 1,
      active: false,
    })
  })

  it("(routes) should receive a list of professionals", async () => {
    const response = await supertest(app).get("/api/v1/professional").expect(200)
    expect(response.body).toMatchObject({ items: [{
        name: "José Silva",
        email: "jose@silva.com",
        phone: "88997524214",
        professionId: 1
      }] })
  })

  it("(routes) should receive one professional", async () => {
    const response = await supertest(app).get("/api/v1/professional/1").expect(200)
    expect(response.body).toMatchObject({
      name: "José Silva",
      email: "jose@silva.com",
      phone: "88997524214",
      professionId: 1
    } )
  })

  it("(routes) should succeed in update a professional", async () => {
    const response = await supertest(app).put("/api/v1/professional/1").send({
      name: "José Marivaldo Silva",
      email: "jose1@silva.com",
      phone: "88987524214",
      professionId: 1
    }).expect(200)

    expect(response.body).toMatchObject({
      name: "José Marivaldo Silva",
      email: "jose1@silva.com",
      phone: "88987524214",
      professionId: 1
    } )
  })

  // After all tests have finished, close the DB connection
  afterAll(async () => {
    await thisDb.sequelize.close()
  })
})
