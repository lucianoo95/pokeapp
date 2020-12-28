import { Collection } from '../models';

export const create = async (req, res, next) => {
  const idUser = req.userId;
  const { name } = req.body;
  const newCollection = await Collection.create({
    name,
    user: idUser
  }).catch(next);

  if (newCollection) {
    return res.status(200).json({
      ok: true,
      newCollection
    });
  }
}

export const remove = async (req, res, next) => {
  const { idCollection } = req.body;
  await Collection.findByIdAndDelete(idCollection)
    .catch(next);

  return res.status(200).json({
    ok: true,
    message: 'Removed collection'
  });
}

export const addPokemon = async (req, res) => {
  const { idPokemon, idCollection } = req.body;
  await Collection.findByIdAndUpdate(
    idCollection,
    {
      $push: { pokemons: idPokemon },
    },
    {
      new: true,
      useFindAndModify: true,
    }
  );

  return res.status(200).json({
    ok: true,
    message: 'Saved pokemon'
  });
}

export const removePokemon = async (req, res) => {
  const { idPokemon, idCollection } = req.body;
  await Collection.findByIdAndUpdate(
    idCollection,
    {
      $pull: { pokemons: idPokemon },
    },
    {
      new: true,
      useFindAndModify: true,
    }
  );

  return res.status(200).json({
    ok: true,
    message: 'Removed pokemon'
  });
}
