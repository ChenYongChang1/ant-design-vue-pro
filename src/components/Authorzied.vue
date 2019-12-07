<script>
import { checkAuth } from '../router/auth';
export default {
  functional: true,
  props: {
    auth: {
      type: Array,
      required: true,
    },
  },
  render(h, content) {
    const { props, scopedSlots } = content;
    return checkAuth(props.auth) ? scopedSlots.default() : null;
  },
};
</script>
