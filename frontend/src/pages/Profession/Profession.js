import React, { useEffect, useState } from 'react';
import { Container, Box, Button, Modal, makeStyles } from "@material-ui/core";
import ProfessionForm from "../../components/ProfessionForm/";
import Table from "../../components/shared/Table";
import professionStyles from "./Styles";
import useProfession from "../../hooks/useProfession";


const useStyles = makeStyles((theme) => professionStyles(theme));

const Profession = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProfession, setSelectedProfession] = useState({});
  const [rows, setRows] = useState([]);
  const { professions, fetching, fetchAll } = useProfession();
  const classes = useStyles();

  useEffect(() => fetchAll(), [fetchAll])

  // Faz alterações nos dados das linhas para exibição na tabela
  useEffect(() => {
    setRows(professions.map(profession => ({
      ...profession,
      status: profession.active ? 'Sim' : 'Não'
    })))
  }, [professions])

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'description', headerName: 'Descrição', flex: 1 },
    { field: 'status', headerName: 'Ativo', width: 150 },
  ];

  const onCloseModal = (refresh = false) => {
    setOpenModal(false)
    setSelectedProfession({})
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
          <ProfessionForm
            professional={selectedProfession}
            onClose={() => onCloseModal(true)}
          />
        )}
      </Modal>

      <h3>Lista de Profissões</h3>

      <Button
        className={classes.addButton}
        size="small"
        variant="contained"
        onClick={() => setOpenModal(true)}
      >
        Adicionar Profissão
      </Button>

      <Box>
        <Table
          columns={columns}
          rows={rows}
          onCellClick={(val) => {
            setSelectedProfession(val)
            setOpenModal(true)
          }}
          pageSize={7}
          loading={fetching}
        />
      </Box>
    </Container>
  )
}

export default Profession
