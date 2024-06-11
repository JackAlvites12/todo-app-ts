interface BoxIconProps extends React.HTMLAttributes<HTMLElement> {
    name: string;
    color?: string;
    animation?: string;
    // Agrega otras propiedades que `box-icon` pueda aceptar según la documentación
  }

declare namespace JSX {
    interface IntrinsicElements {
      'box-icon': BoxIconProps;
    }
}