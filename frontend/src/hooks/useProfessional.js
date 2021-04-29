import { useState, useCallback } from 'react';
import * as professionalApi from '../api/professionalApi';

const useProfessional = () => {
  const [professionals, setProfessionals] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState(false);

  const fetchAll = useCallback(() => {
    setFetching(true);

    professionalApi
      .find()
      .then(({ data}) => setProfessionals(data.items))
      .finally(() => setFetching(false))
  }, []);

  const create = useCallback((professional) => {
    setSending(true);
    setSuccess(false);

    professionalApi
      .create(professional)
      .then(() => setSuccess(true))
      .catch((err) => setError(err))
      .finally(() => setSending(false))
  }, [setSuccess]);

  const update = useCallback((professional) => {
    setSending(true);
    setSuccess(false);

    professionalApi
      .update(professional)
      .then(() => setSuccess(true))
      .catch((err) => setError(err))
      .finally(() => setSending(false))
  }, [setSuccess]);

  return {
    profession: professionals,
    success,
    error,
    fetching,
    sending,
    fetchAll,
    create,
    update
  };
};

export default useProfessional;
