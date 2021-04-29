import { useState, useCallback } from 'react';
import * as professionApi from '../api/professionApi';

const useProfession = () => {
  const [professions, setProfessions] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState(false);

  const fetchAll = useCallback((filters = {}) => {
    setFetching(true);

    professionApi
      .find(filters)
      .then(({ data}) => setProfessions(data.items))
      .finally(() => setFetching(false))
  }, []);

  const create = useCallback((profession) => {
    setSending(true);
    setSuccess(false);

    professionApi
      .create(profession)
      .then(() => setSuccess(true))
      .catch((err) => setError(err))
      .finally(() => setSending(false))
  }, [setSuccess]);

  const update = useCallback((profession) => {
    setSending(true);
    setSuccess(false);

    professionApi
      .update(profession)
      .then(() => setSuccess(true))
      .catch((err) => setError(err))
      .finally(() => setSending(false))
  }, [setSuccess]);

  return {
    professions,
    success,
    error,
    fetching,
    sending,
    fetchAll,
    create,
    update
  };
};

export default useProfession;
