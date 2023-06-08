import {defineCliConfig} from 'sanity/cli';
import { studioDataset, studioProjectId } from './src/enviroment'

export default defineCliConfig({
    api: {
        projectId: studioProjectId,
        dataset: studioDataset,
    }
})
