import { Schema, model } from 'mongoose';

const PokemonSchema = Schema({
  idPokemon: {
    type: String,
    requerid: true,
    unique: true
  },
  name: {
    type: String,
    requerid: false,
    unique: true
  }
}, {
  timestamps: true,
  versionKey: false
});

const Pokemon = model('Collection', PokemonSchema);
export default Pokemon;