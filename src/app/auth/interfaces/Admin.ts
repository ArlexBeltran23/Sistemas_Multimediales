// Interface para capturar los datos de la api de empleados

export interface AdminResponse {
  status:      boolean;
  code:        number;
  colaborador: Colaborador;
}

export interface Colaborador {
  tipo_documento:      string;
  numero_documento:    number;
  nombres:             string;
  apellidos:           string;
  email_institucional: string;
  estado:              string;
  area:                string;
  cargo:               string;
  sede:                string;
  foto:                string;
}
