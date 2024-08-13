export default function TabButton({children, onSelected}) {
  
    return (
        //this is the childer of the Tab Button por example <TabButton>Tab 1</TabButton> , in this case Tab1 is the children
        <li><button onClick={onSelected}>{children}</button></li>
    );
}