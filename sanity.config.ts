import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import { studioDataset, studioProjectId, studioTitle } from './src/enviroment'


const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  title: studioTitle,
  projectId: studioProjectId,
  dataset: studioDataset,
  plugins: [
    deskTool(),
    visionTool(),
    ...(isDev ? devOnlyPlugins : [])
  ],
  schema: {
    types: schemaTypes,
  },
});

