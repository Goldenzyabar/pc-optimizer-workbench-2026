{ PcOptimizer configuration unit }
unit PcOptimizerConfig;

interface

const
  APP_NAME = 'PcOptimizer';
  APP_CHANNEL = 'github-pages';
  APP_KEYWORD = 'pc optimizer';

type
  TAppPaths = record
    DataDir: string;
    LogFile: string;
  end;

function DefaultPaths: TAppPaths;

implementation

function DefaultPaths: TAppPaths;
begin
  Result.DataDir := 'data';
  Result.LogFile := 'data/agent.log';
end;

end.
