import { Wrapper, TabMenuItem, ItemLink } from "./styles";

const TabMenu = () => {
    return (
        <Wrapper>
            <TabMenuItem><ItemLink>best</ItemLink></TabMenuItem>
            <TabMenuItem><ItemLink>hot</ItemLink></TabMenuItem>
            <TabMenuItem><ItemLink>new</ItemLink></TabMenuItem>
            <TabMenuItem><ItemLink>rising</ItemLink></TabMenuItem>
            <TabMenuItem><ItemLink>controversial</ItemLink></TabMenuItem>
            <TabMenuItem><ItemLink>top</ItemLink></TabMenuItem>
            <TabMenuItem><ItemLink>gilded</ItemLink></TabMenuItem>
            <TabMenuItem><ItemLink>wiki</ItemLink></TabMenuItem>
            <TabMenuItem><ItemLink>show images</ItemLink></TabMenuItem>
        </Wrapper>
    )
}

export default TabMenu;