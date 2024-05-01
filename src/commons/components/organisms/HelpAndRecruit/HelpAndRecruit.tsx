function HelpAndRecruit() {
  return (
    <div className="flex justify-center items-center space-x-8 m-16">
          <Button
              title="Help"
              describe="ヘルプセンター（よくある質問）"
          />
          
          <Button
              title="Recruit"
              describe="採用情報"
          />
    </div>
  );
}

interface ButtonProps {
    title: string;
    describe: string;
    onClick?: () => void;
    className?: string;
}

function Button({ title, describe, onClick, className = "" }: ButtonProps) {
    const _className = `flex flex-col justify-center items-center space-y-4 rounded-md bg-white w-[555px] h-[252px] ${className}`;
    
    return (
        <div className={_className}>
            <h2 className="text-6xl">{title}</h2>
            <p>{describe}</p>
        </div>
    );
}

export default HelpAndRecruit;
