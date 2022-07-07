import React, { useState } from 'react';
import { toast } from 'react-toastify';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';

import { Container } from './styles';
import { useRegisterVehicle } from '../../hooks/useRegisterVehicle';
import { BrandType, VehicleProps } from '../../hooks/useVehicles/types';
import { useUpdateVehicle } from '../../hooks/useUpdateVehicle';

interface FormVehicleProps {
  formType: 'register' | 'update';
  formData?: VehicleProps;
  onSubmit?: () => void;
}

const FormVehicle: React.FC<FormVehicleProps> = ({
  formType,
  formData,
  onSubmit
}) => {

  // STATES
  const [brand, setBrand] = useState(formData?.marca || 'BMW');
  const [vehicle, setVehicle] = useState(formData?.veiculo || '');
  const [year, setYear] = useState(formData?.ano ? String(formData?.ano) : '');
  const [description, setDescription] = useState(formData?.descricao || '');
  const [sold, setSold] = useState(formData?.vendido || false);

  // HOOKS
  const registerVehicle = useRegisterVehicle();
  const updateVehicle = useUpdateVehicle();

  /**
   * @description Triggered to clear the form
   */
  const clearForm = () => {
    setBrand('BMW');
    setVehicle('');
    setYear('');
    setDescription('');
    setSold(false);
  }

  /**
   * 
   * @description Change the state of the brand input
   */
  const handleBrandChange = (event: SelectChangeEvent) => {
    setBrand(event.target.value as BrandType);
  };

  /**
   * 
   * @description Change the state of the sold input
   */
  const handleSoldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSold(event.target.checked);
  };

  /**
   * 
   * @description Register a new vehicle
   */
  const handleRegisterVehicle = () => {
    if(brand && vehicle && year && description){
      registerVehicle.mutate({
        ano: Number(year),
        descricao: description,
        marca: brand,
        veiculo: vehicle,
      },{
        onSuccess: () => {
          if (onSubmit) {
            onSubmit();
          }
          clearForm();
        }
      });
    } else {
      toast.error('Erro ao cadastrar o veículo, verifique o formulário!');
    }

  };

  /**
   * 
   * @description Update a vehicle
   */
  const handleUpdateVehicle = () => {
    if(formData){
      updateVehicle.mutate({
        id: formData._id,
        ano: Number(year),
        descricao: description,
        marca: brand,
        veiculo: vehicle,
        vendido: sold,
      },{
        onSuccess: () => {
          if (onSubmit) {
            onSubmit();
          }
          clearForm();
        }
      });
    } else {
      toast.error('Erro ao atualizar o veículo, verifique o formulário!');
    }
  };


  /**
   * 
   * @description Trigger form submission
   */
  const handleSubmitForm = () => {
    if(formType === 'register'){
      handleRegisterVehicle();
      return;
    }
    handleUpdateVehicle();
  }

  return (
    <Container>
      <h3>{formType === 'register' ? 'Cadastrar Veículo' : 'Atualizar Veículo'}</h3>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Marca</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={brand}
          label="Age"
          onChange={handleBrandChange}
        >
          <MenuItem value="BMW">BMW</MenuItem>
          <MenuItem value="Toyota">Toyota</MenuItem>
          <MenuItem value="Volkswagen">Volkswagen</MenuItem>
          <MenuItem value="Hyundai">Hyundai</MenuItem>
          <MenuItem value="Ford">Ford</MenuItem>
          <MenuItem value="Honda">Honda</MenuItem>
          <MenuItem value="Nissan">Nissan</MenuItem>
          <MenuItem value="Chevrolet">Chevrolet</MenuItem>
          <MenuItem value="Kia">Kia</MenuItem>
          <MenuItem value="Fiat">Fiat</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Veiculo"
        variant="outlined"
        value={vehicle}
        onChange={event => setVehicle(event.target.value)}
      />
      <TextField
        label="Ano"
        variant="outlined"
        value={year}
        onChange={event => setYear(event.target.value)}
      />
      <TextField
        label="Descrição"
        variant="outlined"
        multiline
        maxRows={4}
        value={description}
        onChange={event => setDescription(event.target.value)}
      />
      {formType === 'update' && (
        <p>
          <strong>Vendido: </strong>
          <Switch checked={sold} onChange={handleSoldChange}/>
        </p>
      )}

      <Button
        variant="contained"
        onClick={handleSubmitForm}
      >
       {formType === 'register' ? 'Cadastrar' : 'Atualizar'}
      </Button>
    </Container>
  );
}

export default FormVehicle;