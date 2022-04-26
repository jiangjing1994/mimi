/* Automatically generated by './build/bin/build-entry.js' */

import KemButton from '../packages/Button/index.js'
import KemTable from '../packages/Table/index.js'
import KemCheckboxGroup from '../packages/CheckboxGroup/index.js'
import KemChooseArrayElement from '../packages/ChooseArrayElement/index.js'
import KemColorPicker from '../packages/ColorPicker/index.js'
import KemCountUp from '../packages/CountUp/index.js'
import KemCrud from '../packages/Crud/index.js'
import KemD52tButton from '../packages/D52tButton/index.js'
import KemDataIcons from '../packages/DataIcons/index.js'
import KemDataView from '../packages/DataView/index.js'
import KemDatePicker from '../packages/DatePicker/index.js'
import KemDialog from '../packages/Dialog/index.js'
import KemDropdown from '../packages/Dropdown/index.js'
import KemFlipNnumber from '../packages/FlipNnumber/index.js'
import KemForm from '../packages/Form/index.js'
import KemIcon from '../packages/Icon/index.js'
import KemInput from '../packages/Input/index.js'
import KemInputColor from '../packages/InputColor/index.js'
import KemInputNumber from '../packages/InputNumber/index.js'
import KemInputPassWord from '../packages/InputPassWord/index.js'
import KemInputSlider from '../packages/InputSlider/index.js'
import KemInputTree from '../packages/InputTree/index.js'
import KemJsxForm from '../packages/JsxForm/index.js'
import KemLabelText from '../packages/LabelText/index.js'
import KemPageCard from '../packages/PageCard/index.js'
import KemRadioboxGroup from '../packages/RadioboxGroup/index.js'
import KemRangePicker from '../packages/RangePicker/index.js'
import KemResizeBox from '../packages/ResizeBox/index.js'
import KemSearch from '../packages/Search/index.js'
import KemSelect from '../packages/Select/index.js'
import KemSelectTree from '../packages/SelectTree/index.js'
import KemSteps from '../packages/Steps/index.js'
import KemSvgIcon from '../packages/SvgIcon/index.js'
import KemSwitch from '../packages/Switch/index.js'
import KemTag from '../packages/Tag/index.js'
import KemTagGroup from '../packages/TagGroup/index.js'
import KemTimeline from '../packages/Timeline/index.js'
import KemTransfer from '../packages/Transfer/index.js'
import KemTree from '../packages/Tree/index.js'
import KemUpload from '../packages/Upload/index.js'
import ContextMenu from './ContextMenu'
import ElementUI from 'element-ui'
import Grid from '@jiangjing94/grid'
import '@jiangjing94/grid/lib/index.css'
import './theme/index.scss'
import { isExitsVariable } from './utils'
import './utils'
const components = [
  KemButton,
  KemTable,
  KemCheckboxGroup,
  KemChooseArrayElement,
  KemColorPicker,
  KemCountUp,
  KemCrud,
  KemD52tButton,
  KemDataIcons,
  KemDataView,
  KemDatePicker,
  KemDialog,
  KemDropdown,
  KemFlipNnumber,
  KemForm,
  KemIcon,
  KemInput,
  KemInputColor,
  KemInputNumber,
  KemInputPassWord,
  KemInputSlider,
  KemInputTree,
  KemJsxForm,
  KemLabelText,
  KemPageCard,
  KemRadioboxGroup,
  KemRangePicker,
  KemResizeBox,
  KemSearch,
  KemSelect,
  KemSelectTree,
  KemSteps,
  KemSvgIcon,
  KemSwitch,
  KemTag,
  KemTagGroup,
  KemTimeline,
  KemTransfer,
  KemTree,
  KemUpload,
]

const install = function (Vue, opts = {}) {
  if (install.installed) return

  components.forEach((component) => Vue.component(component.name, component))

  const SIZE = opts.size || 'mini'
  const tableRowStyle = ({ rowIndex }) => {
    if (rowIndex % 2 === 0) {
      return {
        backgroundColor: '#f7f7f7',
      }
    }
  }
  Vue.prototype.$MIMI = {
    SIZE,
    buttonSize: opts.buttonSize || 'mini',
    menuType: opts.menuType || 'text',
    Button: {
      size: opts.Button?.size || SIZE,
      type: opts.Button?.type || 'primary',
      wait: opts.Button?.wait || 1000,
      customButtonConfig: opts.Button?.customButtonConfig || false,
    },
    Table: {
      size: opts['Table']?.size || SIZE,
      type: opts['Table']?.type || 'primary',

      isShowIndex: isExitsVariable(opts['Table']?.isShowIndex) ? opts['Table']?.isShowIndex : true,
      isShowHeader: isExitsVariable(opts['Table']?.isShowHeader) ? opts['Table']?.isShowHeader : true,
      isShowBorder: isExitsVariable(opts['Table']?.isShowBorder) ? opts['Table']?.isShowBorder : true,
      isShowStripe: isExitsVariable(opts['Table']?.isShowStripe) ? opts['Table']?.isShowStripe : false,

      selection: opts['Table']?.selection || false,
      indexLabel: opts['Table']?.indexLabel || '序号',
      align: opts['Table']?.align || 'center',
      menuWidth: opts['Table']?.menuWidth || 200,
      rowStyle: opts['Table']?.rowStyle || tableRowStyle,
      pageOption: opts['Table']?.pageOption || {
        pageSizes: [5, 10, 20, 50],
        pageSize: 20,
      },
      defaultProps: opts['Table']?.defaultProps || {
        currentPage: 'pageNo',
        pageSize: 'pageSize',
        order: 'order',
        prop: 'prop',
        total: 'page_size',
        data: 'data',
      },
      orderProps: opts['Table']?.orderProps || {
        ascending: 'ascending',
        descending: 'descending',
      },
      mergeOption: opts['Table']?.mergeOption || {},
    },
    Form: {
      formConfig: {
        labelWidth: '120px',
        labelPosition: 'right',
        SIZE,
        ...opts['Form']?.formConfig,
      },
      labelStyle: {
        ...opts['Form']?.labelStyle,
      },
      rowGutter: opts['Form']?.rowGutter || 0,
      labelSuffix: opts['Form']?.labelSuffix || '',
    },
    Tag: {
      size: opts.Tag?.size || SIZE,
    },
    LabelText: {
      labelStyle: {
        ...opts['LabelText']?.labelStyle,
      },
    },
    Tree: {
      arrow: opts.tree ? (opts.tree.arrow ? opts.tree.arrow : '') : '',
      customArrow: opts.tree ? (opts.tree.customArrow ? opts.tree.customArrow : '') : '',
      arrowSize: opts.tree ? (opts.tree.arrowSize ? opts.tree.arrowSize : '') : '',
    },
    // 输入组件
    Input: {
      clearable: isExitsVariable(opts['Input']?.clearable) ? opts['Input']?.clearable : true,
    },
  }

  ElementUI.install(Vue, {
    size: opts.size,
  })
  Grid.install(Vue, {
    size: opts.size,
  })

  ContextMenu.install(Vue)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '1.4.8',
  install,
  KemButton,
  KemTable,
  KemCheckboxGroup,
  KemChooseArrayElement,
  KemColorPicker,
  KemCountUp,
  KemCrud,
  KemD52tButton,
  KemDataIcons,
  KemDataView,
  KemDatePicker,
  KemDialog,
  KemDropdown,
  KemFlipNnumber,
  KemForm,
  KemIcon,
  KemInput,
  KemInputColor,
  KemInputNumber,
  KemInputPassWord,
  KemInputSlider,
  KemInputTree,
  KemJsxForm,
  KemLabelText,
  KemPageCard,
  KemRadioboxGroup,
  KemRangePicker,
  KemResizeBox,
  KemSearch,
  KemSelect,
  KemSelectTree,
  KemSteps,
  KemSvgIcon,
  KemSwitch,
  KemTag,
  KemTagGroup,
  KemTimeline,
  KemTransfer,
  KemTree,
  KemUpload,
}
