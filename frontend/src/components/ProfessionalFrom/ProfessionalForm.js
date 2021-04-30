import React, { useEffect } from "react";
import {
  Grid,
  Container,
  Button,
  CircularProgress,
  makeStyles
} from "@material-ui/core";
import { Formik, Form } from 'formik';
import { professionalSchema } from "../../common/schemas/professionalSchema";
import professionalFormStyles from "./Styles";
import FormField from "../shared/FormField";
import FormSelect from "../shared/FormSelect";
import useProfessional from "../../hooks/useProfessional";
import useProfession from "../../hooks/useProfession";
import { phoneMask } from "../../common/masks";
import FormSwitch from "../shared/FormSwitch";

const useStyles = makeStyles((theme) => professionalFormStyles(theme));

const ProfessionalForm = ({ professional = {}, onClose } ) => {
  const { success, sending, create, update } = useProfessional();
  const { professions, fetchAll } = useProfession();
  const classes = useStyles();

  useEffect(() => fetchAll({ active: true }), [fetchAll])

  useEffect(() => {
    if (success) onClose()
  }, [success, onClose])

  const formFieldSituation = () => (
    <Grid container justify="flex-end" alignItems="baseline">
      <FormSwitch name="active" />
      <p>Ativo</p>
    </Grid>
  );

  const { id, name, email, phone, professionId, active } = professional

  return (
    <Container className={classes.container}>
      <h3 className={classes.title}>
        {`${!id ? 'Adicionar' : 'Editar'} Profissional`}
      </h3>

      <Formik
        initialValues={{
          id,
          name: name || "",
          email: email || "",
          phone: phone || "",
          professionId,
          active
        }}
        validationSchema={professionalSchema}
        onSubmit={(values) => {
          console.log(values)
          if (!id) return create(values)
          update(values)
        }}
      >{() => (
          <Form>
            <Grid container spacing={2}  justify="space-between">
              <Grid container spacing={2} item md={6} xs={12}>
                <Grid item xs={12}>
                  <FormField
                    name="name"
                    type="text"
                    label="Nome"
                    variant="filled"
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormField
                    name="phone"
                    label="Telefone"
                    variant="filled"
                    mask={phoneMask}
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} item md={6} xs={12}>
                <Grid item xs={12}>
                  <FormField
                    name="email"
                    type="email"
                    label="E-mail"
                    variant="filled"
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormSelect
                    name="professionId"
                    options={professions}
                    label="Profissão *"
                    required
                  />
                </Grid>
              </Grid>
            </Grid>

            { !!id ? formFieldSituation() : <div/>}

            <Button
              className={classes.addButton}
              size="small"
              variant="contained"
              type="submit"
              disabled={sending}
            >
              {!sending ? 'Salvar' : (<CircularProgress size={10} />)}
            </Button>
          </Form>
      )}</Formik>
    </Container>
  );
}

export default ProfessionalForm
