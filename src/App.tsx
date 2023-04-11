import { useAsync } from './hooks/useAsync';
import { ApiResponse } from './models/api-response';
import { getTime } from './utils/getTime';
import { Clock } from './components/Clock';

export const App = () => {
  const { value, error } = useAsync<ApiResponse>(getTime, []);

  return (
    <div className="app">
      {error && <p>Error</p>}

      {!error && <Clock data={value} />}
    </div>
  );
};
