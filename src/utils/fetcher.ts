const get = (url: string) => fetch(url).then((res) => res.json());

const getById = ([url, id]: [url: string, id: string | number]) => fetch(`${url}/${id}`).then((res) => res.json());

export {
  get,
  getById,
};
