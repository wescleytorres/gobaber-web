import React, { useState } from 'react';

import { FiClock, FiPower } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContant,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calender,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContant>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img
              src="https://avatars.githubusercontent.com/u/66565807?s=460&u=e9e8415c46ff8d35913d535b5a751164281a1aae&v=4"
              alt={user.name}
            />
            <div>
              <span>Bem vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button onClick={signOut} type="button">
            <FiPower />
          </button>
        </HeaderContant>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/66565807?s=460&u=e9e8415c46ff8d35913d535b5a751164281a1aae&v=4"
                alt="Wescley Torres"
              />
              <strong>Wescley Torres</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/66565807?s=460&u=e9e8415c46ff8d35913d535b5a751164281a1aae&v=4"
                  alt="Wescley Torres"
                />
                <strong>Wescley Torres</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/66565807?s=460&u=e9e8415c46ff8d35913d535b5a751164281a1aae&v=4"
                  alt="Wescley Torres"
                />
                <strong>Wescley Torres</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/66565807?s=460&u=e9e8415c46ff8d35913d535b5a751164281a1aae&v=4"
                  alt="Wescley Torres"
                />
                <strong>Wescley Torres</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calender />
      </Content>
    </Container>
  );
};

export default Dashboard;
