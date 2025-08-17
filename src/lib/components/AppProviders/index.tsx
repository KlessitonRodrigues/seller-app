import { PropsWithChildren } from "react";
import { ConfigProvider } from "antd";
import { themeConfig } from "src/style/antDesignTheme";
import { Toaster } from "react-hot-toast";
import { toastOptions } from "src/services/common/toast";

const AppProviders = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <ConfigProvider theme={themeConfig}>
      <Toaster toastOptions={toastOptions} />
      {children}
    </ConfigProvider>
  );
};

export default AppProviders;
