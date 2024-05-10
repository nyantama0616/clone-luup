function HelpAndRecruit() {
  return (
    <div className="p-4 flex flex-col w-full md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8 m-16">
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
    const _className = `flex flex-col justify-center items-center space-y-4 rounded-md bg-white w-full md:w-[555px] h-[170px] md:h-[252px] hover:text-primary-200 ${className}`;
    
    return (
        <a className={_className} href="#">
            <h2 className="text-4xl md:text-6xl">{title}</h2>
            <p>{describe}</p>
        </a>
    );
}

export default HelpAndRecruit;
