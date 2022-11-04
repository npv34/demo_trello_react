import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

export default function AlignItemsList(props) {

    return (
        <>
                <Droppable droppableId={props.id}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <List sx={{ width: '100%', maxWidth: 360 }}>
                                {props.items.map((item, index) => (
                                    <>
                                        <Draggable key={item.id} draggableId={item.id} index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <ListItem alignItems="flex-start" style={{margin: 5 + 'px', backgroundColor: 'white'}}>
                                                        <ListItemAvatar>
                                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                                        </ListItemAvatar>
                                                        <ListItemText
                                                            primary={item.name}
                                                            secondary={
                                                                <React.Fragment>
                                                                    <Typography
                                                                        sx={{ display: 'inline' }}
                                                                        component="span"
                                                                        variant="body2"
                                                                        color="text.primary"
                                                                    >
                                                                    </Typography>
                                                                    {" — I'll be in your neighborhood doing errands this…"}
                                                                </React.Fragment>
                                                            }
                                                        />
                                                    </ListItem>
                                                    <Divider variant="inset" component="li" />
                                                </div>
                                            )}
                                        </Draggable>

                                    </>
                                ))}
                                {provided.placeholder}
                            </List>

                        </div>
                    )}
                </Droppable>
        </>
    );
}

