import { computed, reactive, ref, toRefs, watch } from 'vue';
import { CustomLink } from '~/base/index.js';
import { useRipplePlugin } from '~/ripple/ripple-plugin.js';

export default {
  name: 'mcw-fab',
  props: {
    icon: String,
    mini: Boolean,
    exited: Boolean,
    label: String,
  },
  components: { CustomLink },
  setup(props, { slots }) {
    const root = ref(null);
    const uiState = reactive({
      classes: {
        'mdc-fab': 1,
        'mdc-fab--mini': props.mini,
        'mdc-fab--extended': props.label || slots.default,
        'mdc-fab--exited': props.exited,
      },
    });

    const { classes: rippleClasses, styles } = useRipplePlugin(root);
    const classes = computed(() => {
      return { ...rippleClasses.value, ...uiState.classes };
    });

    watch(
      () => props.icon,
      nv => {
        uiState.classes = { ...uiState.classes, 'material-icons': nv };
      },
    );

    watch(
      () => props.mini,
      nv => {
        uiState.classes = { ...uiState.classes, 'mdc-fab--mini': nv };
      },
    );

    watch(
      () => props.exited,
      nv => {
        uiState.classes = { ...uiState.classes, 'mdc-fab--exited': nv };
      },
    );

    return { ...toRefs(uiState), classes, root, styles };
  },
};
