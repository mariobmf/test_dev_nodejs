import React, { useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { subWeeks, isAfter, parseISO, getDecade } from 'date-fns';
import { DeleteOutline, Edit } from '@mui/icons-material';

import { useVehicles } from '../../hooks/useVehicles';
import { useRegisterVehicle } from '../../hooks/useRegisterVehicle';
import { useDeleteVehicle } from '../../hooks/useDeleteVehicle';
import { BrandType, VehicleProps } from '../../hooks/useVehicles/types';

import { 
  Container,
  LeftColumnContainer,
  RightColumnContainer,
  VehiclesContainer,
  CardContainer,
  ReportContainer,
} from './styles';
import FormVehicle from '../../components/FormVehicle';
import Modal from '../../components/Modal';


type ManufacturersProps = {
  brand: BrandType;
  amount: number
};

type DecadeProps = {
  decade: number;
  amount: number
};

const Home: React.FC = () => {
  // STATES
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [vehicleToEdit, setVehicleToEdit] = React.useState<VehicleProps>();

  // HOOKS
  const { data: vehicles } = useVehicles();
  const deleteVehicle = useDeleteVehicle();

  /**
   * 
   * @description show form edit vehicle
   */
  const handleEditVehicle = (vehicle: VehicleProps) => {
    setVehicleToEdit(vehicle);
    setModalIsOpen(true);
  };

  /**
   * 
   * @description Close Modal
   */
  const handleCloseModal = () => {
    setModalIsOpen(false);
    setVehicleToEdit(undefined);
  };
  
  /**
   * 
   * @description delete a vehicle
   */
  const handleDeleteVehicle = (id: string) => {
    deleteVehicle.mutate(id);
  };

  /**
   * 
   * @description number of vehicles for sale
   */
  const unsoldVehicles = useMemo(() => {
    const totalVehicles = vehicles?.filter(item => !item.vendido);

    return totalVehicles ? totalVehicles.length : 0;
  }, [vehicles]);

  /**
   * 
   * @description Vehicles registered during the last week
   */
  const vehiclesLastWeek = useMemo(() => {
    const currentDate = new Date();
    const dayLastWeek = subWeeks(currentDate, 1);

    const totalVehiclesLastWeek = vehicles?.filter(
      item => isAfter(parseISO(item.created), dayLastWeek));

    return totalVehiclesLastWeek;
  }, [vehicles]);

  /**
   * 
   * @description registered manufacturers
   */
   const manufacturers = useMemo(() => {
    const initialManufacturers:ManufacturersProps[] = [];

    const totalManufacturers= vehicles?.reduce((acc, vehicle) => {
      const findBrand = acc.findIndex(item => item.brand === vehicle.marca);

      // Se n??o existir a fabricante no array, ent??o
      if(findBrand < 0){
        // retorno o array com a nova fabricante
        return [
          ...acc,
          {
            brand: vehicle.marca,
            amount: 1,
          }
        ]
      }

      // Se j?? existir a fabricante no array, ent??o incremento a quantidade 
      acc[findBrand] = {
        brand: acc[findBrand].brand,
        amount: acc[findBrand].amount + 1,
      };

      return acc; 
      
    }, initialManufacturers);

    return totalManufacturers;
  }, [vehicles]);

  /**
   * 
   * @description vehicles per decade of manufacture
   */
   const vehiclesDecade = useMemo(() => {
    const initialDecades: DecadeProps[] = [];

    const totalDecades= vehicles?.reduce((acc, vehicle) => {
      const currentVehicleDecade = getDecade(new Date(vehicle.ano, 1, 1));

      const findBrand = acc.findIndex(item => item.decade === currentVehicleDecade);

      // Se n??o existir a d??cada no array, ent??o
      if(findBrand < 0){
        // retorno o array com a nova d??cada
        return [
          ...acc,
          {
            decade: currentVehicleDecade,
            amount: 1,
          }
        ]
      }

      // Se j?? existir a d??cada no array, ent??o incremento a quantidade 
      acc[findBrand] = {
        decade: acc[findBrand].decade,
        amount: acc[findBrand].amount + 1,
      };

      return acc; 
      
    }, initialDecades);

    return totalDecades;
  }, [vehicles]);


  return (
    <Container>
      <LeftColumnContainer>
        <CardContainer>
          <FormVehicle formType="register"/>
        </CardContainer>

        <CardContainer>
            <h3>Relat??rio</h3>
          <ReportContainer>
            <p>
              <strong>Ve??culos n??o vendidos: </strong>
              {unsoldVehicles}
            </p>

            <section>
              <h4>Distribui????o de ve??culos por d??cada</h4>
              {vehiclesDecade?.map(vehicleDecade => (
                <p key={vehicleDecade.decade}>
                  <strong>{`D??cada ${vehicleDecade.decade}: `}</strong>
                  {`${vehicleDecade.amount} ve??culos`}
                </p>
              ))}

              {!vehiclesDecade || vehiclesDecade.length <= 0 &&(
                <p>Nenhum ve??culo cadastrado</p>
              )}
            </section>

            <section>
              <h4>Distribui????o de ve??culos por fabricante</h4>

              {manufacturers?.map(manufacturer => (
                <p key={manufacturer.brand}>
                  <strong>{`${manufacturer.brand}: `}</strong>
                  {`${manufacturer.amount} ve??culos`}
                </p>
              ))}

              {!manufacturers || manufacturers.length <= 0 &&(
                <p>Nenhum ve??culo cadastrado</p>
              )}
            </section>
          </ReportContainer>
        </CardContainer>
      </LeftColumnContainer>
      <RightColumnContainer>
        <h2>Ve??culos cadastrados durante a ultima semana</h2>
        <VehiclesContainer>
          {vehiclesLastWeek?.map(vehicle => (
            <CardContainer key={vehicle._id}>
              <button
                className='edit_card'
                type="button"
                onClick={() => handleEditVehicle(vehicle)}
              >
                <Edit />
              </button>
              <button
                className='delete_card'
                type="button"
                onClick={() => handleDeleteVehicle(vehicle._id)}
              >
                <DeleteOutline />
              </button>

              <h3>{vehicle.veiculo}</h3>

              <p>
                <strong>Marca: </strong>
                {vehicle.marca}
              </p>  

              <p>
                <strong>Ano: </strong>
                {vehicle.ano}
              </p>  

              <p>
                <strong>Descri????o: </strong>
                {vehicle.descricao}
              </p>  

              <p>
                <strong>{vehicle.vendido ? 'Vendido' : 'Dispon??vel para venda'}</strong>
              </p>  
            </CardContainer>
          ))}
        </VehiclesContainer>
      </RightColumnContainer>

      <Modal
        title=''
        closeModal={handleCloseModal}
        isOpen={modalIsOpen}
      >
        <FormVehicle
          formType="update"
          formData={vehicleToEdit}
          onSubmit={handleCloseModal}
        />
      </Modal>
    </Container>
  );
}

export default Home;