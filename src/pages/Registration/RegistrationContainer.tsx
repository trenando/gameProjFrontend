import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  registrationThunkCreator,
  unmountRegisterAC,
} from "../../redux/actions/authActions/registrationActions";
import { Registration } from "./Registration";
import { RegistrationDispatch, RegistrationProps, RegistrationSelector, RegistrationState, UnmountRegistrationDispatch } from "./RegistrationTypes";

export const RegistrationContainer: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const registrationSelector: RegistrationSelector = useSelector(({ registration }: RegistrationState) => registration);
  const registration: RegistrationDispatch = (values) => dispatch(registrationThunkCreator(values));
  const unmountRegistration: UnmountRegistrationDispatch = useCallback(() => {
    dispatch(unmountRegisterAC())
  }, [dispatch])
  useEffect(() => {
    return () => {
      unmountRegistration();
    };
  }, [unmountRegistration]);
  const registrationProps: RegistrationProps = {
    ...registrationSelector, registration
  }

  return <Registration {...registrationProps} />
}
