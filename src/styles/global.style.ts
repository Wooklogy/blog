//** 사이즈 단위로 변경*/
export const translatePxValue = (val: string | number | undefined) => {
  if (val === undefined || val === null) return;
  const result = typeof val === "number" ? `${val}px` : val;
  return result;
};
// weight 단위 변경
export const translateWeightValue = (val: string | number | undefined) => {
  if (val === undefined || val === null) return;
  if (typeof val === "number") {
    return val;
  } else {
    switch (String(val).toLowerCase()) {
      case "thin":
        return 100;
      case "light":
        return 300;
      case "regular":
        return 400;
      case "medium":
        return 500;
      case "bold":
        return 700;
      case "black":
        return 900;
    }
  }
  const result = typeof val === "number" ? `${val}px` : val;
  return result;
};
// basePath prefix하여 path 생성
export const createPublicPath = (path: string) => {
  return `/blog/${path}`;
};

export interface AppThemeProps {
  color: {
    primary: string;
    primary_second: string;
    primary_alpha: string;
    primary_second_alpha: string;
    text_second: string;
    text_third: string;
    white: string;
    text: string;
    text_bold: string;
    text_link: string;
    divider: string;
    success: string;
    error: string;
    warn: string;
  };
  font_size: {
    ti: string;
    de: string;
    sm: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
    abstract: string;
    title: string;
  };
  box: {
    border_radius: number;
    shadow: string;
  };
}
export const AppTheme: AppThemeProps = {
  color: {
    primary: "#FFC022",
    primary_second: "#C936BA",
    primary_alpha: "rgba(255,192,34,0.2)",
    primary_second_alpha: "rgba(201,54,186,0.2)",
    white: "#dddddd",
    text: "#161616",
    text_second: "#BBBBBB",
    text_third: "#F2F2F2",
    text_bold: "#000000",
    text_link: "#FFC022",
    divider: "#F2F2F2",
    success: "#4BB543",
    error: "#FF3333",
    warn: "#FFCC00",
  },
  font_size: {
    ti: "0.75rem",
    de: "1rem",
    sm: "1.25rem",
    lg: "1.725rem",
    xl: "2rem",
    xxl: "2.25rem",
    xxxl: "2.75rem",
    abstract: "2.5rem",
    title: "3rem",
  },
  box: {
    border_radius: 12,
    shadow: `0px 4px 8px rgba(0, 0, 0, 0.25)`,
  },
};
