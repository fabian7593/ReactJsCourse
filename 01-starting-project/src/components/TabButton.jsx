export default function TabButton(props) {
    return (
        //this is the childer of the Tab Button por example <TabButton>Tab 1</TabButton> , in this case Tab1 is the children
        <li><button>{props.children}</button></li>
    );
}