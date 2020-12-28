import { Schema, model } from 'mongoose';

const CollectionSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  pokemons: {
    type: Array,
    required: false
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: true,
  versionKey: false
});

const CollectionPokemon = model('CollectionPokemon', CollectionSchema);
export default CollectionPokemon;