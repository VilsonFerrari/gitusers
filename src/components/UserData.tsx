import React from 'react'
import { User } from '../reducers/search_reducer'
import { Col, Container, Media, Row } from "reactstrap";
import styled from 'styled-components';

type Props = {
    user: User
}

const ProfileImage = styled(Media)`
    max-width: 100px;
    max-height: 100px;
    border-radius: 50%;
`

const RepoTitle = styled.a`
    overflow-wrap: anywhere;
`

export const UserData = ({ user }: Props) => (
    <Container className="mt-3 pb-5">
        <Row>
            <Col xs={12}>
                <Media>
                    <Media className="mr-4" left>
                        <ProfileImage object src={user.avatar_url} alt={user?.name ?? user.login} />
                    </Media>
                    <Media body>
                        <Media heading>
                            <a href={user.html_url} target="_blank">
                                {user?.name ?? user.login} 
                            </a>
                            &nbsp;
                            {user.email ? ( <small><a href={`mailto:${user.email}`}>({user.email})</a></small>) : null}
                        </Media>
                        {user.bio}
                        <Media className="justify-content-end">
                            Member since: {user.created_at.toLocaleString()}
                        </Media>
                    </Media>
                </Media>
            </Col>

            <Col xs={12} className="mt-5">
                <h2>Repositories</h2>
            </Col>

            {user.repos.map((repo, idx) => (
                <Col xs={12} className="mt-3" key={idx}>
                    <Media>
                        <Media body>
                            <Media heading>
                                <RepoTitle href={repo.html_url} target="_blank">
                                    {repo.full_name}
                                </RepoTitle>
                            </Media>
                            {repo.description}
                            <Media className="justify-content-end">
                                Created at: {repo.created_at.toLocaleString()}
                            </Media>
                        </Media>
                    </Media>
                </Col>
            ))}
        </Row>
    </Container>
)