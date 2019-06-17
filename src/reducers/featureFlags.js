import { VisibilityFilters } from '../actions'

const featureFlags = (state = FeatureFlag.FOOTER_V1, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;

        default:
            return state;
    }
};

export default featureFlags;
