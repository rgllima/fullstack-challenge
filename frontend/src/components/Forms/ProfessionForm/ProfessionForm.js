import React, { useEffect } from "react";
import {
  Grid,
  Container,
  Button,
  CircularProgress,
  makeStyles
} from "@material-ui/core";
import { Formik, Form } from 'formik';
import professionalFormStyles from "./Styles";
import FormField from "../../FormField";
import useProfession from "../../../hooks/useProfession";
import FormSwitch from "../../FormSwitch";
import { professionSchema } from "../../../common/schemas/professionSchema";

const useStyles = makeStyles((theme) => professionalFormStyles(theme));

const ProfessionForm = ({ professional: profession = {}, onClose } ) => {
  const { success, sending, create, update } = useProfession();
  const classes = useStyles();

  useEffect(() => {
    if (success) onClose()
  }, [success, onClose])

  const formFieldSituation = () => (
    <Grid container justify="flex-end" alignItems="baseline">
      <FormSwitch name="active" />
      <p>Ativo</p>
    </Grid>
  );

  const { id, description, active } = profession

  return (
    <Container className={classes.container}>
      <h3 className={classes.title}>
        {`${!id ? 'Adicionar' : 'Editar'} Profissão`}
      </h3>

      <Formik
        initialValues={{
          id,
          description: description || "",
          active
        }}
        validationSchema={professionSchema}
        onSubmit={(values) => {
          console.log(values)
          if (!id) return create(values)
          update(values)
        }}
      >{() => (
        <Form>
          <Grid container spacing={2}  justify="space-between">
            <Grid item xs={12}>
              <FormField
                name="description"
                type="text"
                label="Descrição"
                variant="filled"
                fullWidth
                required
              />
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

export default ProfessionForm
