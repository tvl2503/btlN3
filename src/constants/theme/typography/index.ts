import { COLORS } from '../../../theme/colors';

export enum TYPOGRAPHY_VARIANT {
  HEADING_1 = 'heading_1',
  HEADING_2 = 'heading_2',
  HEADING_3 = 'heading_3',
  HEADING_4 = 'heading_4',
  HEADING_5 = 'heading_5',
  TITLE_18_MEDIUM = 'title-18-medium',
  TITLE_15_MEDIUM = 'title-15-medium',
  BODY = 'body',
  ACTION_14_MEDIUM = 'action-14-medium',
  ACTION_12_MEDIUM = 'action-12-medium',
  LABEL = 'label',
  PLACEHOLDER = 'placeholder',
  CAPTION_14_REGULAR = 'caption-14-regular',
  CAPTION_12_MEDIUM = 'caption-12-medium',
}

export enum FONT_WEIGHT {
  light = 300,
  regular = 400,
  medium = 500,
  semibold = 600,
  bold = 700,
}

export enum FONT_SIZES {
  sm = '12px',
  md = '14px',
  lg = '15px',
  xl = '18px',
  xxl = '22px',
}

export enum LINE_HEIGHT {
  sm = '16px',
  md = '20px',
  lg = '22px',
  xl = '24px',
  xxl = '28px',
}

export interface TypographyConfigProps {
  [key: string]: {
    fontSize: FONT_SIZES;
    lineHeight: LINE_HEIGHT;
    fontWeight: FONT_WEIGHT;
    color: COLORS;
  };
}

export const TypographyConfig: TypographyConfigProps = {
  [TYPOGRAPHY_VARIANT.HEADING_1]: {
    color: COLORS.neutral_1,
    fontSize: FONT_SIZES.xxl,
    lineHeight: LINE_HEIGHT.xxl,
    fontWeight: FONT_WEIGHT.bold,
  },
  [TYPOGRAPHY_VARIANT.HEADING_2]: {
    color: COLORS.neutral_1,
    fontSize: FONT_SIZES.xl,
    fontWeight: FONT_WEIGHT.bold,
    lineHeight: LINE_HEIGHT.xl,
  },
  [TYPOGRAPHY_VARIANT.HEADING_3]: {
    color: COLORS.neutral_1,
    fontSize: FONT_SIZES.xl,
    fontWeight: FONT_WEIGHT.semibold,
    lineHeight: LINE_HEIGHT.xl,
  },
  [TYPOGRAPHY_VARIANT.HEADING_4]: {
    color: COLORS.neutral_1,
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHT.bold,
    lineHeight: LINE_HEIGHT.md,
  },
  [TYPOGRAPHY_VARIANT.HEADING_5]: {
    color: COLORS.neutral_1,
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHT.semibold,
    lineHeight: LINE_HEIGHT.md,
  },
  [TYPOGRAPHY_VARIANT.TITLE_18_MEDIUM]: {
    color: COLORS.neutral_1,
    fontSize: FONT_SIZES.xl,
    fontWeight: FONT_WEIGHT.medium,
    lineHeight: LINE_HEIGHT.xl,
  },
  [TYPOGRAPHY_VARIANT.TITLE_15_MEDIUM]: {
    color: COLORS.neutral_1,
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHT.medium,
    lineHeight: LINE_HEIGHT.md,
  },
  [TYPOGRAPHY_VARIANT.BODY]: {
    fontSize: FONT_SIZES.lg,
    lineHeight: LINE_HEIGHT.lg,
    fontWeight: FONT_WEIGHT.regular,
    color: COLORS.neutral_2,
  },
  [TYPOGRAPHY_VARIANT.ACTION_14_MEDIUM]: {
    color: COLORS.neutral_3,
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHT.medium,
    lineHeight: LINE_HEIGHT.md,
  },
  [TYPOGRAPHY_VARIANT.ACTION_12_MEDIUM]: {
    color: COLORS.neutral_3,
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHT.medium,
    lineHeight: LINE_HEIGHT.sm,
  },
  [TYPOGRAPHY_VARIANT.LABEL]: {
    color: COLORS.neutral_4,
    fontSize: FONT_SIZES.lg,
    lineHeight: LINE_HEIGHT.md,
    fontWeight: FONT_WEIGHT.regular,
  },
  [TYPOGRAPHY_VARIANT.PLACEHOLDER]: {
    color: COLORS.neutral_5,
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHT.regular,
    lineHeight: LINE_HEIGHT.lg,
  },
  [TYPOGRAPHY_VARIANT.CAPTION_14_REGULAR]: {
    color: COLORS.neutral_4,
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHT.regular,
    lineHeight: LINE_HEIGHT.md,
  },
  [TYPOGRAPHY_VARIANT.CAPTION_12_MEDIUM]: {
    color: COLORS.neutral_4,
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHT.medium,
    lineHeight: LINE_HEIGHT.sm,
  },
};
