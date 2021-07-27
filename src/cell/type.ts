/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-07-26 09:42:22
 * */

export interface TdCellProps {
  /**
   * 内容的对齐方式，默认居中对齐
   * @default middle
   */
  align?: {
    type: StringConstructor;
    value?: 'top' | 'middle' | 'bottom';
    required?: boolean;
  };
  /**
   * 是否显示右侧箭头
   * @default false
   */
  arrow?: {
    type: BooleanConstructor;
    value?: boolean;
    required?: boolean;
  };
  /**
   * 是否显示下边框
   * @default true
   */
  bordered?: {
    type: BooleanConstructor;
    value?: boolean;
    required?: boolean;
  };
  /**
   * 下方内容描述
   */
  description?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
  /**
   * 组件类名，分别用于设置 组件外层类名、标题类名、右侧说明文字类名、下方描述内容类名、图片类名、激活态类名、左侧图标类名、右侧图标类名 等
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: [
      't-class',
      't-class-title',
      't-class-note',
      't-class-description',
      't-class-thumb',
      't-class-hover',
      't-class-left',
      't-class-right',
    ];
    required?: boolean;
  };
  /**
   * 是否开启点击反馈
   */
  hover?: {
    type: BooleanConstructor;
    value?: boolean;
    required?: boolean;
  };
  /**
   * 链接跳转类型
   * @default navigateTo
   */
  jumpType?: {
    type: StringConstructor;
    value?: 'redirectTo' | 'switchTab' | 'reLaunch' | 'navigateTo';
    required?: boolean;
  };
  /**
   * 和标题同行的说明文字
   */
  note?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
  /**
   * 是否显示表单必填星号
   * @default false
   */
  required?: {
    type: BooleanConstructor;
    value?: boolean;
    required?: boolean;
  };
  /**
   * 主图
   */
  thumb?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
  /**
   * 标题
   */
  title?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
  /**
   * 点击后跳转链接地址。如果值为空，则表示不需要跳转
   * @default ''
   */
  url?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
}
