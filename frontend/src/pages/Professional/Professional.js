import React, { useEffect, useState } from 'react';
import { Container, Box, Button, Modal, makeStyles } from "@material-ui/core";
import professionalStyles from "./Styles";
import Table from "../../components/shared/Table";
import ProfessionalForm from "../../components/ProfessionalFrom";
import useProfessional from "../../hooks/useProfessional";

const useStyles = makeStyles((theme) => professionalStyles(theme));

const Professional = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProfessional, setSelectedProfessional] = useState({});
  const [rows, setRows] = useState([]);
  const { profession, fetching, fetchAll } = useProfessional();
  const classes = useStyles();

  useEffect(() => {
    fetchAll()
  }, [fetchAll])

  // Faz alterações nos dados das linhas para exibição na tabela
  useEffect(() => {
    setRows(profession.map(professional => ({
      ...professional,
      profession: professional.Profession.description,
      status: professional.active ? 'Sim' : 'Não'
    })))
  }, [profession])

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nome', flex: 1 },
    { field: 'phone', headerName: 'Telefone', flex: 1 },
    { field: 'email', headerName: 'E-mail', flex: 1 },
    { field: 'profession', headerName: 'Profissão', flex: 1 },
    { field: 'status', headerName: 'Ativo', flex: 1 },
  ];

  const onCloseModal = (refresh = false) => {
    setOpenModal(false)
    setSelectedProfessional({})
    if (refresh) fetchAll()
  }

  return (
    <Container className={classes.container}>
      <Modal
        open={openModal}
        onClose={() => onCloseModal()}
        className={classes.modal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {(
          <ProfessionalForm
            professional={selectedProfessional}
            onClose={() => onCloseModal(true)}
          />
        )}
      </Modal>

      <h3>Lista de Profissionais</h3>

      <Button
        className={classes.addButton}
        size="small"
        variant="contained"
        onClick={() => setOpenModal(true)}
      >
        Adicionar Profissional
      </Button>

      <Box>
        <Table
          columns={columns}
          rows={rows}
          onCellClick={(val) => {
            setSelectedProfessional(val)
            setOpenModal(true)
          }}
          pageSize={7}
          loading={fetching}
        />
      </Box>
    </Container>
  )
}

export default Professional
