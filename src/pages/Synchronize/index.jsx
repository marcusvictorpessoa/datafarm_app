import {View} from 'react-native';
import {SynchronizeStyles} from './styles';
import Button from '../../components/Button';
import Strings from '../../strings';
import SynchronizeInfo from '../../components/SynchronizeInfo';
import useSynchronizeRequest from '../../hooks/useSynchronizeRequest';
import BackgroundSpinner from '../../components/BackgroundSpinner';

export default function Synchronize() {
  const {qtdRegisters, handleSynchronize, loading} = useSynchronizeRequest();
  return (
    <View style={SynchronizeStyles.container}>
      {loading && <BackgroundSpinner />}
      <SynchronizeInfo numberRegisters={qtdRegisters} />
      <Button
        onPress={() => handleSynchronize()}
        loading={false}
        disabled={qtdRegisters === 0}
        txt={Strings.sync}
        mt={0}
        w={150}
      />
    </View>
  );
}
