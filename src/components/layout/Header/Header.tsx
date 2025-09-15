import Default from "./template/Default";
import Simple from "./template/Simple";


const headers: Record<string, React.FC> = {
  Default: Default,
  Simple: Simple,
};

type HeaderProps = {
  variant?: keyof typeof headers;
};

export default function Header({ variant = "Default" }: HeaderProps) {
  const Component = headers[variant];
  return <Component />;
}