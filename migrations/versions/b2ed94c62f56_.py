"""empty message

Revision ID: b2ed94c62f56
Revises: 
Create Date: 2023-09-13 11:34:37.999152

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b2ed94c62f56'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=250), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('last_name', sa.String(length=100), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('club',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('estado', sa.String(length=120), nullable=False),
    sa.Column('ciudad', sa.String(length=120), nullable=False),
    sa.Column('direccion', sa.String(length=200), nullable=False),
    sa.Column('description', sa.String(length=300), nullable=False),
    sa.Column('id_user', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id_user'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('place',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('type', sa.String(length=50), nullable=False),
    sa.Column('description', sa.String(length=300), nullable=False),
    sa.Column('id_club', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id_club'], ['club.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('image',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('route', sa.String(length=150), nullable=False),
    sa.Column('description', sa.String(length=300), nullable=False),
    sa.Column('id_place', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id_place'], ['place.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('image')
    op.drop_table('place')
    op.drop_table('club')
    op.drop_table('user')
    # ### end Alembic commands ###