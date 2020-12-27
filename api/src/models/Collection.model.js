import { Schema, model } from 'mongoose';

const CollectionSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  pokemons: [{ type: Schema.Types.ObjectId, ref: 'Pokemon' }]
}, {
  timestamps: true,
  versionKey: false
});

const CollectionPokemon = model('CollectionPokemon', CollectionSchema);
export default CollectionPokemon;